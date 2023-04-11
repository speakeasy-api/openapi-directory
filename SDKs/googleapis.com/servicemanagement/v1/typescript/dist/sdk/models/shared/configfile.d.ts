import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of configuration file this represents.
 */
export declare enum ConfigFileFileTypeEnum {
    FileTypeUnspecified = "FILE_TYPE_UNSPECIFIED",
    ServiceConfigYaml = "SERVICE_CONFIG_YAML",
    OpenApiJson = "OPEN_API_JSON",
    OpenApiYaml = "OPEN_API_YAML",
    FileDescriptorSetProto = "FILE_DESCRIPTOR_SET_PROTO",
    ProtoFile = "PROTO_FILE"
}
/**
 * Generic specification of a source configuration file
 */
export declare class ConfigFile extends SpeakeasyBase {
    /**
     * The bytes that constitute the file.
     */
    fileContents?: string;
    /**
     * The file name of the configuration file (full or relative path).
     */
    filePath?: string;
    /**
     * The type of configuration file this represents.
     */
    fileType?: ConfigFileFileTypeEnum;
}
