import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateCustomerProfileEvaluationServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateCustomerProfileEvaluationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest extends SpeakeasyBase {
    /**
     * The unique string of a policy that is associated to the customer_profile resource.
     */
    policySid: string;
}
export declare class CreateCustomerProfileEvaluationRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the CustomerProfile resource.
     */
    customerProfileSid: string;
    requestBody?: CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest;
}
export declare class CreateCustomerProfileEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    trusthubV1CustomerProfileCustomerProfileEvaluation?: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation;
}
