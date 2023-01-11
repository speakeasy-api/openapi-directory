import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ItemCreatePublicTokenRequest extends SpeakeasyBase {
    request: shared.ItemPublicTokenCreateRequest;
}
export declare class ItemCreatePublicTokenResponse extends SpeakeasyBase {
    contentType: string;
    itemPublicTokenCreateResponse?: Record<string, any>;
    statusCode: number;
}
