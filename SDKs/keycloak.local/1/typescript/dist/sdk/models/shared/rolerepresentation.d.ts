import { SpeakeasyBase } from "../../../internal/utils";
import { RoleRepresentationComposites } from "./rolerepresentationcomposites";
/**
 * success
 */
export declare class RoleRepresentation extends SpeakeasyBase {
    attributes?: Record<string, any>;
    clientRole?: boolean;
    composite?: boolean;
    composites?: RoleRepresentationComposites;
    containerId?: string;
    description?: string;
    id?: string;
    name?: string;
}
