import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest extends SpeakeasyBase {
    id: string;
    settingsScope: string;
}
export declare class PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
