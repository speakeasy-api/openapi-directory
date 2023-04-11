import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { GmbAccounts } from "./gmbaccounts";
import { LiaSettings } from "./liasettings";
import { PosDataProviders } from "./posdataproviders";
export declare class LiasettingsCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The ID of the request entry to which this entry responds.
     */
    batchId?: number;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
    gmbAccounts?: GmbAccounts;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponseEntry`"
     */
    kind?: string;
    /**
     * Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
     */
    liaSettings?: LiaSettings;
    /**
     * The list of POS data providers.
     */
    posDataProviders?: PosDataProviders[];
}
