import { SpeakeasyBase } from "../../../internal/utils";
import { ProtocolMapperRepresentation } from "./protocolmapperrepresentation";
/**
 * success
 */
export declare class ClientScopeRepresentation extends SpeakeasyBase {
    attributes?: Record<string, any>;
    description?: string;
    id?: string;
    name?: string;
    protocol?: string;
    protocolMappers?: ProtocolMapperRepresentation[];
}
