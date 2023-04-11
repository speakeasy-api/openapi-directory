import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveSentryRiskDataByIdRequest extends SpeakeasyBase {
    /**
     * ID of NearEarth object.  ID can be SPK_ID, Asteroid des (designation) or Sentry ID
     */
    asteroidId: string;
}
export declare class RetrieveSentryRiskDataByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sentryImpactRiskObject?: shared.SentryImpactRiskObject;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
