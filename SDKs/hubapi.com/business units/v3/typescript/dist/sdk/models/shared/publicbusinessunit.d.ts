import { SpeakeasyBase } from "../../../internal/utils";
import { PublicBusinessUnitLogoMetadata } from "./publicbusinessunitlogometadata";
/**
 * A Business Unit
 */
export declare class PublicBusinessUnit extends SpeakeasyBase {
    /**
     * The Business Unit's unique ID
     */
    id: string;
    /**
     * A Business Unit's logo metadata
     */
    logoMetadata?: PublicBusinessUnitLogoMetadata;
    /**
     * The Business Unit's name
     */
    name: string;
}
