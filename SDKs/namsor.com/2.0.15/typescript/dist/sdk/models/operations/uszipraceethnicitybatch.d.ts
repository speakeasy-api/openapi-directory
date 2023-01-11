import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsZipRaceEthnicityBatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UsZipRaceEthnicityBatchRequest extends SpeakeasyBase {
    request?: shared.BatchFirstLastNameGeoZippedIn;
    security: UsZipRaceEthnicityBatchSecurity;
}
export declare class UsZipRaceEthnicityBatchResponse extends SpeakeasyBase {
    batchFirstLastNameUSRaceEthnicityOut?: shared.BatchFirstLastNameUsRaceEthnicityOut;
    contentType: string;
    statusCode: number;
}
