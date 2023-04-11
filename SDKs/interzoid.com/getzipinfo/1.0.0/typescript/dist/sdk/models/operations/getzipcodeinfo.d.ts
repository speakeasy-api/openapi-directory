import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetzipcodeinfoRequest extends SpeakeasyBase {
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
    /**
     * Zip code to retrieve detailed information
     */
    zip: string;
}
/**
 * Zip code detailed code information
 */
export declare class Getzipcodeinfo200ApplicationJSON extends SpeakeasyBase {
    areaSquareMiles?: string;
    city?: string;
    code?: string;
    credits?: string;
    elderlyHouseholdPercent?: string;
    farmerHouseholdPercent?: string;
    incomePercent100k?: string;
    incomePercent200k?: string;
    incomePercent50k?: string;
    latitude?: string;
    longitude?: string;
    marriedHouseholdPercent?: string;
    population?: string;
    state?: string;
    zipCode?: string;
}
export declare class GetzipcodeinfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Zip code detailed code information
     */
    getzipcodeinfo200ApplicationJSONObject?: Getzipcodeinfo200ApplicationJSON;
}
