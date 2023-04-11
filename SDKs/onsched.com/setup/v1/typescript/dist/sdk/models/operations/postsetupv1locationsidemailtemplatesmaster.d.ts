import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1LocationsIdEmailTemplatesMasterRequest extends SpeakeasyBase {
    /**
     * Input model for master email template settings
     */
    masterTemplateSettingsInputModel?: shared.MasterTemplateSettingsInputModel;
    /**
     * id of business location, defaults to primary business location
     */
    id: string;
}
export declare class PostSetupV1LocationsIdEmailTemplatesMasterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
