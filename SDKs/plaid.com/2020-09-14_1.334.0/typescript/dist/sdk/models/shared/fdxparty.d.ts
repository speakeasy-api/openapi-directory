import { SpeakeasyBase } from "../../../internal/utils";
import { FDXPartyRegistryEnum } from "./fdxpartyregistryenum";
import { FDXPartyTypeEnum } from "./fdxpartytypeenum";
/**
 * FDX Participant - an entity or person that is a part of a FDX API transaction
 */
export declare class FDXParty extends SpeakeasyBase {
    /**
     * URI for party, where an end user could learn more about the company or application involved in the data sharing chain
     */
    homeUri?: string;
    /**
     * URI for a logo asset to be displayed to the end user
     */
    logoUri?: string;
    /**
     * Human recognizable common name
     */
    name: string;
    /**
     * Registered id of party
     */
    registeredEntityId?: string;
    /**
     * Registered name of party
     */
    registeredEntityName?: string;
    /**
     * The registry containing the party’s registration with name and id
     */
    registry?: FDXPartyRegistryEnum;
    /**
     * Identifies the type of a party
     */
    type: FDXPartyTypeEnum;
}
