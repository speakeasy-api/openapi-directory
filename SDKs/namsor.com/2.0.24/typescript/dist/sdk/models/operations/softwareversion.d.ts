import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SoftwareVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The current software version
     */
    softwareVersionOut?: shared.SoftwareVersionOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
