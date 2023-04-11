import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1LocationsIdEmailTemplatesMasterRequest extends SpeakeasyBase {
    /**
     * id of business location, defaults to primary business location
     */
    id: string;
}
export declare class DeleteSetupV1LocationsIdEmailTemplatesMasterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
