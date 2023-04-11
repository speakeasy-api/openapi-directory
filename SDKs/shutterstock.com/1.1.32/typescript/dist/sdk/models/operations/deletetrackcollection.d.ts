import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTrackCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class DeleteTrackCollectionRequest extends SpeakeasyBase {
    /**
     * Collection ID
     */
    id: string;
}
export declare class DeleteTrackCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
