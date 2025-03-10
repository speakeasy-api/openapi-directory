package openapisdk.utils;

import java.lang.reflect.Field;

public class QueryParamsMetadata extends Metadata {
    public String style = "form";
    public boolean explode = true;
    public String name;
    public String serialization;

    // queryParam:style=simple,explode=false,name=apiID
    public static QueryParamsMetadata parse(Field field) throws IllegalArgumentException, IllegalAccessException {
        QueryParamsMetadata result = new QueryParamsMetadata();
        result = (QueryParamsMetadata) parse("queryParam", result, field);
        return result;
    }

    private QueryParamsMetadata() {
    }
}
