import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmTestLDAPConnectionRequest extends SpeakeasyBase {
    testLdapConnectionRepresentation: shared.TestLdapConnectionRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmTestLDAPConnectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
