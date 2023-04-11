import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's instant messaging client.
 */
export declare class ImClient extends SpeakeasyBase {
    /**
     * Output only. The protocol of the IM client formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedProtocol?: string;
    /**
     * Output only. The type of the IM client translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The protocol of the IM client. The protocol can be custom or one of these predefined values: * `aim` * `msn` * `yahoo` * `skype` * `qq` * `googleTalk` * `icq` * `jabber` * `netMeeting`
     */
    protocol?: string;
    /**
     * The type of the IM client. The type can be custom or one of these predefined values: * `home` * `work` * `other`
     */
    type?: string;
    /**
     * The user name used in the IM client.
     */
    username?: string;
}
/**
 * A person's instant messaging client.
 */
export declare class ImClientInput extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The protocol of the IM client. The protocol can be custom or one of these predefined values: * `aim` * `msn` * `yahoo` * `skype` * `qq` * `googleTalk` * `icq` * `jabber` * `netMeeting`
     */
    protocol?: string;
    /**
     * The type of the IM client. The type can be custom or one of these predefined values: * `home` * `work` * `other`
     */
    type?: string;
    /**
     * The user name used in the IM client.
     */
    username?: string;
}
