import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateReplaceItemsServerList: readonly ["https://numbers.twilio.com"];
export declare class CreateReplaceItemsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateReplaceItemsCreateReplaceItemsRequest extends SpeakeasyBase {
    /**
     * The source bundle sid to copy the item assignments from.
     */
    fromBundleSid: string;
}
export declare class CreateReplaceItemsRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the Bundle where the item assignments are going to be replaced.
     */
    bundleSid: string;
    requestBody?: CreateReplaceItemsCreateReplaceItemsRequest;
}
export declare class CreateReplaceItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    numbersV2RegulatoryComplianceBundleReplaceItems?: shared.NumbersV2RegulatoryComplianceBundleReplaceItems;
}
