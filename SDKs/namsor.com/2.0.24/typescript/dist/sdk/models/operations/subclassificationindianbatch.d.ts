import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubclassificationIndianBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class SubclassificationIndianBatchResponse extends SpeakeasyBase {
    /**
     * A list of classified names at a subcountry level.
     */
    batchFirstLastNameGeoSubclassificationOut?: shared.BatchFirstLastNameGeoSubclassificationOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
