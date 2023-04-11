import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Expected response format.
 */
export declare enum GetSearchVersionNumberAdditionalDataExtExtEnum {
    Json = "json"
}
/**
 * Defines the precision of the geometries.
 */
export declare enum GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    Thirteen = "13",
    Fourteen = "14",
    Fifteen = "15",
    Sixteen = "16",
    Seventeen = "17",
    Eighteen = "18",
    Nineteen = "19",
    Twenty = "20",
    TwentyOne = "21",
    TwentyTwo = "22"
}
export declare class GetSearchVersionNumberAdditionalDataExtRequest extends SpeakeasyBase {
    /**
     * Expected response format.
     */
    ext: GetSearchVersionNumberAdditionalDataExtExtEnum;
    /**
     * Comma separated list of geometry UUIDs, previously retrieved from an Search API request.
     */
    geometries: string;
    /**
     * Defines the precision of the geometries.
     */
    geometriesZoom?: GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnum;
    /**
     * Service version number. The current value is 2.
     */
    versionNumber: shared.VersionNumberEnum;
}
export declare class GetSearchVersionNumberAdditionalDataExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
