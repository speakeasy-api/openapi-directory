import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateAssessmentsServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateAssessmentsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateAssessmentsRequest extends SpeakeasyBase {
    serverURL?: string;
    security: CreateAssessmentsSecurity;
}
export declare class CreateAssessmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1Assessments?: shared.FlexV1Assessments;
}
