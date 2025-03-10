package openapisdk.utils;

import java.lang.reflect.Field;

public class PathParamsMetadata extends Metadata {
    public String style = "simple";
    public boolean explode;
    public String name;

    // pathParam:style=simple,explode=false,name=apiID
    public static PathParamsMetadata parse(Field field) throws IllegalArgumentException, IllegalAccessException {
        PathParamsMetadata result = new PathParamsMetadata();
        result = (PathParamsMetadata) parse("pathParam", result, field);
        return result;
    }

    private PathParamsMetadata() {
    }
}
