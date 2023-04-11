import { SpeakeasyBase } from "../../../internal/utils";
import { HttpBody } from "./httpbody";
import { Notice } from "./notice";
/**
 * Response to a general RDAP query.
 */
export declare class RdapResponse extends SpeakeasyBase {
    /**
     * Error description.
     */
    description?: string[];
    /**
     * Error HTTP code. Example: "501".
     */
    errorCode?: number;
    /**
     * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
     */
    jsonResponse?: HttpBody;
    /**
     * Error language code. Error response info fields are defined in [section 6 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-6).
     */
    lang?: string;
    /**
     * Notices applying to this response.
     */
    notices?: Notice[];
    /**
     * RDAP conformance level.
     */
    rdapConformance?: string[];
    /**
     * Error title.
     */
    title?: string;
}
