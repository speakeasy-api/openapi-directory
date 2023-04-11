import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BikePointGetRequest extends SpeakeasyBase {
    /**
     * A bike point id (a list of ids can be obtained from the above BikePoint call)
     */
    id: string;
}
export declare class BikePointGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesPlace?: shared.TflApiPresentationEntitiesPlace;
}
