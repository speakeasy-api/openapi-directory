import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchFormServerList: readonly ["https://verify.twilio.com"];
export declare class FetchFormSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchFormRequest extends SpeakeasyBase {
    /**
     * The Type of this Form. Currently only `form-push` is supported.
     */
    formType: shared.FormEnumFormTypesEnum;
}
export declare class FetchFormResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2Form?: shared.VerifyV2Form;
}
