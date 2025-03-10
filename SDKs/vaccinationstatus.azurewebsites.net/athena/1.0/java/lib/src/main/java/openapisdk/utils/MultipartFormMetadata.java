package openapisdk.utils;

import java.lang.reflect.Field;

public class MultipartFormMetadata extends Metadata {
    public boolean file;
    public boolean content;
    public boolean json;
    public String name;

    // multipartForm:name=file
    public static MultipartFormMetadata parse(Field field) throws IllegalArgumentException, IllegalAccessException {
        MultipartFormMetadata result = new MultipartFormMetadata();
        result = (MultipartFormMetadata) parse("multipartForm", result, field);
        return result;
    }

    private MultipartFormMetadata() {
    }
}
