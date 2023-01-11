import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ItemRemoveRequest extends SpeakeasyBase {
    request: shared.ItemRemoveRequest;
}
export declare class ItemRemoveResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    itemRemoveResponse?: Record<string, any>;
    statusCode: number;
}
