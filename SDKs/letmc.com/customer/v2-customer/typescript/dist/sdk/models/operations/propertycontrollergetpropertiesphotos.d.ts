import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PropertyControllerGetPropertiesPhotosRequest extends SpeakeasyBase {
    /**
     * The maximum number of items to return (up to 1000 per request)
     */
    count: number;
    /**
     * The index of the first item to return
     */
    offset: number;
    /**
     * The unique ID of the Property
     */
    propertyID: string;
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
}
export declare class PropertyControllerGetPropertiesPhotosResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    landlordPhotoModelResults?: shared.LandlordPhotoModelResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
