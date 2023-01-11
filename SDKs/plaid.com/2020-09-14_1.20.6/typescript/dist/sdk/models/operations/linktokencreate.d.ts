import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LinkTokenCreateRequest extends SpeakeasyBase {
    request: shared.LinkTokenCreateRequest;
}
export declare class LinkTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    linkTokenCreateResponse?: Record<string, any>;
    statusCode: number;
}
