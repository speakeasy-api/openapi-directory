package openapisdk.models.operations;


public enum GetUserDocumentsTypeFilterEnum {
    ALL("ALL"),
    TEXT_DOCUMENTS("TEXT_DOCUMENTS"),
    PRESENTATIONS("PRESENTATIONS"),
    SPREADSHEETS("SPREADSHEETS"),
    PDFS("PDFS"),
    IMAGES("IMAGES"),
    SUBTITLES("SUBTITLES"),
    DESIGNS("DESIGNS"),
    LOCALIZATION("LOCALIZATION"),
    WEB("WEB"),
    STYLE_GUIDES("STYLE_GUIDES"),
    GLOSSARIES("GLOSSARIES");

    public final String value;

    private GetUserDocumentsTypeFilterEnum(String value) {
        this.value = value;
    }
}
