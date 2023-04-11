import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryDTO } from "./categorydto";
import { MetadataDTO } from "./metadatadto";
import { OnlineProperties } from "./onlineproperties";
import { PresentationDTO } from "./presentationdto";
import { VariantDTO } from "./variantdto";
import { VariantOptionDefinitions } from "./variantoptiondefinitions";
/**
 * Product created. It will include the Product in the response only if 'returnEntity' is true
 */
export declare class ProductResponse extends SpeakeasyBase {
    categories?: string[];
    category?: CategoryDTO;
    created: Date;
    description?: string;
    etag: string;
    externalReference?: string;
    imageLookupKeys?: string[];
    metadata?: MetadataDTO;
    name: string;
    online?: OnlineProperties;
    presentation?: PresentationDTO;
    taxCode?: string;
    taxExempt?: boolean;
    taxRates?: string[];
    unitName?: string;
    updated: Date;
    updatedBy?: string;
    uuid: string;
    variantOptionDefinitions?: VariantOptionDefinitions;
    variants: VariantDTO[];
    vatPercentage?: number;
}
