import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ChangeRecoveryQuestionRequestBodyPassword extends SpeakeasyBase {
    value?: string;
}
export declare class ChangeRecoveryQuestionRequestBodyRecoveryQuestion extends SpeakeasyBase {
    answer?: string;
    question?: string;
}
export declare class ChangeRecoveryQuestionRequestBody extends SpeakeasyBase {
    password?: ChangeRecoveryQuestionRequestBodyPassword;
    recoveryQuestion?: ChangeRecoveryQuestionRequestBodyRecoveryQuestion;
}
export declare class ChangeRecoveryQuestionRequest extends SpeakeasyBase {
    requestBody?: ChangeRecoveryQuestionRequestBody;
    userId: string;
}
export declare class ChangeRecoveryQuestionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
