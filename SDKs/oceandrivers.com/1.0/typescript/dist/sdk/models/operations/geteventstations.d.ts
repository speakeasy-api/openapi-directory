import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEventStationsRequest extends SpeakeasyBase {
    /**
     * currently: 'trofeoprincesasofia|palmavela'
     */
    eventId: string;
}
export declare class GetEventStationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
