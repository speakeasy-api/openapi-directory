import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubclassificationBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class SubclassificationBatchResponse extends SpeakeasyBase {
    /**
     * A list of classified names at a sub-country level.
     */
    batchFirstLastNameGeoSubclassificationOut?: shared.BatchFirstLastNameGeoSubclassificationOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
