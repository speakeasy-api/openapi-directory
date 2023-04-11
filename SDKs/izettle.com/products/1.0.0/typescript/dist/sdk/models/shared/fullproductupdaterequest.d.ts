import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryDTO } from "./categorydto";
import { MetadataDTO } from "./metadatadto";
import { OnlineProperties } from "./onlineproperties";
import { PresentationDTO } from "./presentationdto";
import { VariantDTO } from "./variantdto";
import { VariantOptionDefinitions } from "./variantoptiondefinitions";
export declare class FullProductUpdateRequest extends SpeakeasyBase {
    categories?: string[];
    category?: CategoryDTO;
    description?: string;
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
    uuid: string;
    variantOptionDefinitions?: VariantOptionDefinitions;
    variants?: VariantDTO[];
    vatPercentage?: number;
}
