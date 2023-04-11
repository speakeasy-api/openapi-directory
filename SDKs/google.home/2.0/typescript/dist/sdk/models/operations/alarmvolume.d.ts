import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AlarmVolumeResponse extends SpeakeasyBase {
    contentType: string;
    getvolume?: shared.Getvolume;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
