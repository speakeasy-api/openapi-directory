import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateBundleCopyServerList: readonly ["https://numbers.twilio.com"];
export declare class CreateBundleCopySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateBundleCopyCreateBundleCopyRequest extends SpeakeasyBase {
    /**
     * The string that you assigned to describe the copied bundle.
     */
    friendlyName?: string;
}
export declare class CreateBundleCopyRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the Bundle to be copied.
     */
    bundleSid: string;
    requestBody?: CreateBundleCopyCreateBundleCopyRequest;
}
export declare class CreateBundleCopyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    numbersV2RegulatoryComplianceBundleBundleCopy?: shared.NumbersV2RegulatoryComplianceBundleBundleCopy;
}
