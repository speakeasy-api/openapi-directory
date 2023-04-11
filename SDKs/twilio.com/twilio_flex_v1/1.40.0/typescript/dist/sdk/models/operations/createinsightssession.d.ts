import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateInsightsSessionServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateInsightsSessionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateInsightsSessionRequest extends SpeakeasyBase {
    /**
     * The Authorization HTTP request header
     */
    authorization?: string;
}
export declare class CreateInsightsSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV1InsightsSession?: shared.FlexV1InsightsSession;
}
