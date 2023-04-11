import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNodeResourceRequest extends SpeakeasyBase {
    /**
     * CURIE e.g. HP:0000465
     */
    id: string;
}
export declare class GetNodeResourceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bioObjects?: shared.BioObject[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
