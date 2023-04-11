import { SpeakeasyBase } from "../../../internal/utils";
export declare class V3StopAmenityDetails extends SpeakeasyBase {
    /**
     * The number of free car parking spots at the stop
     */
    carParking?: string;
    /**
     * Indicates if there are CCTV (i.e. closed circuit television) cameras at the stop
     */
    cctv?: boolean;
    /**
     * Indicates if there is a taxi rank at or near the stop
     */
    taxiRank?: boolean;
    /**
     * Indicates if there is a public toilet at or near the stop
     */
    toilet?: boolean;
}
