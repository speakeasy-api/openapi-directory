import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2CadenceImportsJsonRequestBody extends SpeakeasyBase {
    /**
     * Import data for cadence
     */
    cadenceContent?: Record<string, any>;
    /**
     * Settings for a cadence
     */
    settings?: Record<string, any>;
    /**
     * The shared settings for a cadence
     */
    sharingSettings?: Record<string, any>;
}
export declare class PostV2CadenceImportsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
