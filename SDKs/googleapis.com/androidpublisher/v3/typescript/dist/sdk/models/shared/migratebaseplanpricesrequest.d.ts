import { SpeakeasyBase } from "../../../internal/utils";
import { RegionalPriceMigrationConfig } from "./regionalpricemigrationconfig";
import { RegionsVersion } from "./regionsversion";
/**
 * Request message for MigrateBasePlanPrices.
 */
export declare class MigrateBasePlanPricesRequest extends SpeakeasyBase {
    /**
     * Required. The regional prices to update.
     */
    regionalPriceMigrations?: RegionalPriceMigrationConfig[];
    /**
     * The version of the available regions being used for the specified resource.
     */
    regionsVersion?: RegionsVersion;
}
