# templates

### Available Operations

* [copyTemplate](#copytemplate) - Copy template
* [createTemplate](#createtemplate) - Create template
* [deleteTemplate](#deletetemplate) - Delete template
* [getEditorUrl](#geteditorurl) - Open editor
* [getTemplate](#gettemplate) - Get template
* [getTemplates](#gettemplates) - Get templates
* [updateTemplate](#updatetemplate) - Update template

## copyTemplate

Creates a copy of a template to the workspace specified in authentication parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyTemplateRequest;
import org.openapis.openapi.models.operations.CopyTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            CopyTemplateRequest req = new CopyTemplateRequest(19375L) {{
                name = "Johnnie Stamm";
            }};            

            CopyTemplateResponse res = sdk.templates.copyTemplate(req);

            if (res.copyTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTemplate

Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTemplateResponse;
import org.openapis.openapi.models.shared.Component;
import org.openapis.openapi.models.shared.ComponentClsEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TemplateDefinitionNew;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayout;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutFormatEnum;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutMargins;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutOrientationEnum;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutRepeatLayout;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutRepeatLayoutFormatEnum;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutRotaionEnum;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutUnitEnum;
import org.openapis.openapi.models.shared.TemplateDefinitionNewPages;
import org.openapis.openapi.models.shared.TemplateDefinitionNewPagesMargins;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TemplateDefinitionNew req = new TemplateDefinitionNew("Invoice template") {{
                isDraft = true;
                layout = new TemplateDefinitionNewLayout() {{
                    emptyLabels = 384382L;
                    format = TemplateDefinitionNewLayoutFormatEnum.A4;
                    height = 29.7;
                    margins = new TemplateDefinitionNewLayoutMargins() {{
                        bottom = 0.5;
                        left = 0.5;
                        right = 0.5;
                        top = 0.5;
                    }};;
                    orientation = TemplateDefinitionNewLayoutOrientationEnum.PORTRAIT;
                    repeatLayout = new TemplateDefinitionNewLayoutRepeatLayout() {{
                        format = TemplateDefinitionNewLayoutRepeatLayoutFormatEnum.A4;
                        height = 29.7;
                        width = 21;
                    }};;
                    rotaion = TemplateDefinitionNewLayoutRotaionEnum.NINETY;
                    unit = TemplateDefinitionNewLayoutUnitEnum.CM;
                    width = 21;
                }};;
                pages = new org.openapis.openapi.models.shared.TemplateDefinitionNewPages[]{{
                    add(new TemplateDefinitionNewPages() {{
                        components = new org.openapis.openapi.models.shared.Component[]{{
                            add(new Component() {{
                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                dataIndex = "line_items";
                                height = 1;
                                id = "component-12313";
                                left = 2.5;
                                top = 4.2;
                                value = "${price}";
                                width = 3.5;
                                zindex = 102L;
                            }}),
                            add(new Component() {{
                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                dataIndex = "line_items";
                                height = 1;
                                id = "component-12313";
                                left = 2.5;
                                top = 4.2;
                                value = "${price}";
                                width = 3.5;
                                zindex = 102L;
                            }}),
                            add(new Component() {{
                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                dataIndex = "line_items";
                                height = 1;
                                id = "component-12313";
                                left = 2.5;
                                top = 4.2;
                                value = "${price}";
                                width = 3.5;
                                zindex = 102L;
                            }}),
                            add(new Component() {{
                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                dataIndex = "line_items";
                                height = 1;
                                id = "component-12313";
                                left = 2.5;
                                top = 4.2;
                                value = "${price}";
                                width = 3.5;
                                zindex = 102L;
                            }}),
                        }};
                        height = 29.7;
                        margins = new TemplateDefinitionNewPagesMargins() {{
                            bottom = 0.5;
                            right = 0.5;
                        }};
                        width = 21;
                    }}),
                    add(new TemplateDefinitionNewPages() {{
                        components = new org.openapis.openapi.models.shared.Component[]{{
                            add(new Component() {{
                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                dataIndex = "line_items";
                                height = 1;
                                id = "component-12313";
                                left = 2.5;
                                top = 4.2;
                                value = "${price}";
                                width = 3.5;
                                zindex = 102L;
                            }}),
                        }};
                        height = 29.7;
                        margins = new TemplateDefinitionNewPagesMargins() {{
                            bottom = 0.5;
                            right = 0.5;
                        }};
                        width = 21;
                    }}),
                }};
                tags = new String[]{{
                    add("tempora"),
                    add("suscipit"),
                    add("molestiae"),
                    add("minus"),
                }};
            }};            

            CreateTemplateResponse res = sdk.templates.createTemplate(req);

            if (res.createTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTemplate

Deletes the template from workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTemplateRequest;
import org.openapis.openapi.models.operations.DeleteTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteTemplateRequest req = new DeleteTemplateRequest(19375L);            

            DeleteTemplateResponse res = sdk.templates.deleteTemplate(req);

            if (res.deleteTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEditorUrl

Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEditorUrlLanguageEnum;
import org.openapis.openapi.models.operations.GetEditorUrlRequest;
import org.openapis.openapi.models.operations.GetEditorUrlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetEditorUrlRequest req = new GetEditorUrlRequest(                new java.util.HashMap<String, Object>() {{
                                put("excepturi", "nisi");
                                put("recusandae", "temporibus");
                            }}, 19375L) {{
                language = GetEditorUrlLanguageEnum.EN;
            }};            

            GetEditorUrlResponse res = sdk.templates.getEditorUrl(req);

            if (res.getEditorUrl200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTemplate

Returns template configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTemplateRequest;
import org.openapis.openapi.models.operations.GetTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetTemplateRequest req = new GetTemplateRequest(19375L);            

            GetTemplateResponse res = sdk.templates.getTemplate(req);

            if (res.getTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTemplates

Returns a list of templates available for the authenticated workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetTemplatesResponse res = sdk.templates.getTemplates();

            if (res.getTemplates200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTemplate

Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTemplateRequest;
import org.openapis.openapi.models.operations.UpdateTemplateResponse;
import org.openapis.openapi.models.shared.Component;
import org.openapis.openapi.models.shared.ComponentClsEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TemplateDefinitionNew;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayout;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutFormatEnum;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutMargins;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutOrientationEnum;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutRepeatLayout;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutRepeatLayoutFormatEnum;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutRotaionEnum;
import org.openapis.openapi.models.shared.TemplateDefinitionNewLayoutUnitEnum;
import org.openapis.openapi.models.shared.TemplateDefinitionNewPages;
import org.openapis.openapi.models.shared.TemplateDefinitionNewPagesMargins;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            UpdateTemplateRequest req = new UpdateTemplateRequest(                new TemplateDefinitionNew("Invoice template") {{
                                isDraft = true;
                                layout = new TemplateDefinitionNewLayout() {{
                                    emptyLabels = 20218L;
                                    format = TemplateDefinitionNewLayoutFormatEnum.A4;
                                    height = 29.7;
                                    margins = new TemplateDefinitionNewLayoutMargins() {{
                                        bottom = 0.5;
                                        left = 0.5;
                                        right = 0.5;
                                        top = 0.5;
                                    }};;
                                    orientation = TemplateDefinitionNewLayoutOrientationEnum.PORTRAIT;
                                    repeatLayout = new TemplateDefinitionNewLayoutRepeatLayout() {{
                                        format = TemplateDefinitionNewLayoutRepeatLayoutFormatEnum.A4;
                                        height = 29.7;
                                        width = 21;
                                    }};;
                                    rotaion = TemplateDefinitionNewLayoutRotaionEnum.NINETY;
                                    unit = TemplateDefinitionNewLayoutUnitEnum.CM;
                                    width = 21;
                                }};;
                                pages = new org.openapis.openapi.models.shared.TemplateDefinitionNewPages[]{{
                                    add(new TemplateDefinitionNewPages() {{
                                        components = new org.openapis.openapi.models.shared.Component[]{{
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                        }};
                                        height = 29.7;
                                        margins = new TemplateDefinitionNewPagesMargins() {{
                                            bottom = 0.5;
                                            right = 0.5;
                                        }};
                                        width = 21;
                                    }}),
                                    add(new TemplateDefinitionNewPages() {{
                                        components = new org.openapis.openapi.models.shared.Component[]{{
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                        }};
                                        height = 29.7;
                                        margins = new TemplateDefinitionNewPagesMargins() {{
                                            bottom = 0.5;
                                            right = 0.5;
                                        }};
                                        width = 21;
                                    }}),
                                    add(new TemplateDefinitionNewPages() {{
                                        components = new org.openapis.openapi.models.shared.Component[]{{
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                        }};
                                        height = 29.7;
                                        margins = new TemplateDefinitionNewPagesMargins() {{
                                            bottom = 0.5;
                                            right = 0.5;
                                        }};
                                        width = 21;
                                    }}),
                                    add(new TemplateDefinitionNewPages() {{
                                        components = new org.openapis.openapi.models.shared.Component[]{{
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                            add(new Component() {{
                                                cls = ComponentClsEnum.LABEL_COMPONENT;
                                                dataIndex = "line_items";
                                                height = 1;
                                                id = "component-12313";
                                                left = 2.5;
                                                top = 4.2;
                                                value = "${price}";
                                                width = 3.5;
                                                zindex = 102L;
                                            }}),
                                        }};
                                        height = 29.7;
                                        margins = new TemplateDefinitionNewPagesMargins() {{
                                            bottom = 0.5;
                                            right = 0.5;
                                        }};
                                        width = 21;
                                    }}),
                                }};
                                tags = new String[]{{
                                    add("maiores"),
                                    add("molestiae"),
                                    add("quod"),
                                    add("quod"),
                                }};
                            }};, 19375L);            

            UpdateTemplateResponse res = sdk.templates.updateTemplate(req);

            if (res.updateTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
