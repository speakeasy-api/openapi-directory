import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETStrainByRgdIdUsingGETRequest extends SpeakeasyBase {
    /**
     * RGD ID of the strain
     */
    rgdId: number;
}
export declare class GETStrainByRgdIdUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
