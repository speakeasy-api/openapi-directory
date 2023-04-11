import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetweatherzipcodeRequest extends SpeakeasyBase {
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
    /**
     * Zip code for weather information
     */
    zip: string;
}
/**
 * Current weather information for zip code
 */
export declare class Getweatherzipcode200ApplicationJSON extends SpeakeasyBase {
    city?: string;
    code?: string;
    credits?: string;
    relativeHumidity?: string;
    state?: string;
    tempC?: string;
    tempF?: string;
    visibilityMiles?: string;
    weather?: string;
    windDir?: string;
    windMPH?: string;
}
export declare class GetweatherzipcodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Current weather information for zip code
     */
    getweatherzipcode200ApplicationJSONObject?: Getweatherzipcode200ApplicationJSON;
}
