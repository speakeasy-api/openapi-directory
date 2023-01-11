import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ItemGetRequest extends SpeakeasyBase {
    request: shared.ItemGetRequest;
}
export declare class ItemGetResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    itemGetResponse?: Record<string, any>;
    statusCode: number;
}
