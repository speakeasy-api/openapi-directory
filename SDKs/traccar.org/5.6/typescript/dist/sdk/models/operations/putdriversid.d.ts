import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutDriversIdRequest extends SpeakeasyBase {
    driver: shared.Driver;
    id: number;
}
export declare class PutDriversIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    driver?: shared.Driver;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
