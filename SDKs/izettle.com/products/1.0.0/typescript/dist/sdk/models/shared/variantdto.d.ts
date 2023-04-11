import { SpeakeasyBase } from "../../../internal/utils";
import { PresentationDTO } from "./presentationdto";
import { Price } from "./price";
import { VariantOption } from "./variantoption";
export declare class VariantDTO extends SpeakeasyBase {
    barcode?: string;
    costPrice?: Price;
    description?: string;
    name?: string;
    options?: VariantOption[];
    presentation?: PresentationDTO;
    price?: Price;
    sku?: string;
    uuid: string;
    vatPercentage?: number;
}
