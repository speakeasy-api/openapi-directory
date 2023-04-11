import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum CanceledMembershipsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class CanceledMembershipsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: CanceledMembershipsFormatEnum;
}
export declare class CanceledMembershipsResponse extends SpeakeasyBase {
    canceledMembership?: shared.CanceledMembership;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
