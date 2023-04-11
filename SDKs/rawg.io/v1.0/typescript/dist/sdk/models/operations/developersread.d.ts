import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DevelopersReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this Developer.
     */
    id: number;
}
export declare class DevelopersReadResponse extends SpeakeasyBase {
    contentType: string;
    developerSingle?: shared.DeveloperSingle;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
