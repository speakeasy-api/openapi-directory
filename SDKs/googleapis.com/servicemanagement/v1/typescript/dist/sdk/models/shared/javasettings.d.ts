import { SpeakeasyBase } from "../../../internal/utils";
import { CommonLanguageSettings } from "./commonlanguagesettings";
/**
 * Settings for Java client libraries.
 */
export declare class JavaSettings extends SpeakeasyBase {
    /**
     * Required information for every language.
     */
    common?: CommonLanguageSettings;
    /**
     * The package name to use in Java. Clobbers the java_package option set in the protobuf. This should be used **only** by APIs who have already set the language_settings.java.package_name" field in gapic.yaml. API teams should use the protobuf java_package option where possible. Example of a YAML configuration:: publishing: java_settings: library_package: com.google.cloud.pubsub.v1
     */
    libraryPackage?: string;
    /**
     * Configure the Java class name to use instead of the service's for its corresponding generated GAPIC client. Keys are fully-qualified service names as they appear in the protobuf (including the full the language_settings.java.interface_names" field in gapic.yaml. API teams should otherwise use the service name as it appears in the protobuf. Example of a YAML configuration:: publishing: java_settings: service_class_names: - google.pubsub.v1.Publisher: TopicAdmin - google.pubsub.v1.Subscriber: SubscriptionAdmin
     */
    serviceClassNames?: Record<string, string>;
}
