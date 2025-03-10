package openapisdk.utils;

import java.io.IOException;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class SpeakeasyHTTPClient implements HTTPClient {
    @Override
    public HttpResponse<byte[]> send(HTTPRequest request)
            throws IOException, InterruptedException, URISyntaxException {
        HttpClient client = HttpClient.newHttpClient();

        HttpRequest req = request.build();

        HttpResponse<byte[]> response = client.send(req, HttpResponse.BodyHandlers.ofByteArray());
        return response;
    }
}
